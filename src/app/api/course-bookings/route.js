import sql from "@/app/api/utils/sql";
import { auth } from "@/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, preferredDate, message } = body;

    if (!name || !email || !course) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const result = await sql(
      "INSERT INTO course_bookings (name, email, phone, course, preferred_date, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        name,
        email,
        phone || null,
        course,
        preferredDate || null,
        message || null,
      ],
    );

    return Response.json({
      message: "Course booking submitted successfully",
      booking: result[0],
    });
  } catch (error) {
    console.error("Error creating course booking:", error);
    return Response.json(
      { error: "Failed to submit course booking" },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  try {
    // Check if user is authenticated
    const session = await auth();
    if (!session || !session.user?.id) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookings = await sql(
      "SELECT * FROM course_bookings ORDER BY created_at DESC",
    );
    return Response.json({ bookings });
  } catch (error) {
    console.error("Error fetching course bookings:", error);
    return Response.json(
      { error: "Failed to fetch course bookings" },
      { status: 500 },
    );
  }
}
