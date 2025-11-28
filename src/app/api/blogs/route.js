import sql from "@/app/api/utils/sql";
import { auth } from "@/auth";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let query;
    let params = [];

    if (category && category !== "all") {
      query =
        "SELECT * FROM blogs WHERE category = $1 ORDER BY published_at DESC";
      params = [category];
    } else {
      query = "SELECT * FROM blogs ORDER BY published_at DESC";
    }

    const blogs = await sql(query, params);

    return Response.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    // Check if user is authenticated
    const session = await auth();
    if (!session || !session.user?.id) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, excerpt, content, author, category, image_url } = body;

    if (!title || !excerpt || !content || !author || !category) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const result = await sql(
      "INSERT INTO blogs (title, slug, excerpt, content, author, category, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [title, slug, excerpt, content, author, category, image_url],
    );

    return Response.json({ blog: result[0] });
  } catch (error) {
    console.error("Error creating blog:", error);
    return Response.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
