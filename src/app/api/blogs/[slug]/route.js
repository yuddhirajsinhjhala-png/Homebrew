import sql from "@/app/api/utils/sql";

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    const blogs = await sql("SELECT * FROM blogs WHERE slug = $1", [slug]);

    if (blogs.length === 0) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }

    return Response.json({ blog: blogs[0] });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return Response.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
