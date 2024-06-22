import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
export async function GET() {
  try {
    // Fetch all posts
    const posts = await prisma.post.findMany();
    // Checks if there are no posts
    if (posts.length == 0) {
      return NextResponse.error({
        status: 404,
        statusText: "No posts found",
      });
    }

    return NextResponse.json({
      message: "Posts fetched successfully",
      numberOfPosts: posts.length,
      statusCode: 200,
      data: posts,
    });
  } catch (error) {
    return NextResponse.error({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
export async function POST(request) {
  try {
    // Create a new post
    const post = await prisma.post.create({
      data: {
        title: request.body.title,
        content: request.body.content,
      },
    });
    // Check if the post was created
    if (!post) {
      return NextResponse.error({
        status: 500,
        statusText: "Post not created",
      });
    }
    return NextResponse.json({
      message: "Post updated successfully",
      statusCode: 200,
      data: post,
    });
  } catch (error) {
    return NextResponse.error({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
export async function PUT(request) {
  try {
    // Check if the post exists
    const existingPost = await prisma.post.findUnique({
      where: {
        id: request.body.id,
      },
    });
    if (!existingPost) {
      return NextResponse.error({
        status: 404,
        statusText: "Post not found",
      });
    }
    // Update the post
    const post = await prisma.post.update({
      where: {
        id: request.body.id,
      },
      data: {
        title: request.body.title,
        content: request.body.content,
      },
    });
    return NextResponse.json({
      message: "Post updated successfully",
      statusCode: 200,
      data: post,
    });
  } catch (error) {
    return NextResponse.error({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

export async function DELETE(request) {
  try {
    // Check if the post exists
    const existingPost = await prisma.post.findUnique({
      where: {
        id: request.body.id,
      },
    });
    if (!existingPost) {
      return NextResponse.error({
        status: 404,
        statusText: "Post not found",
      });
    }
    // Delete the post
    const post = await prisma.post.delete({
      where: {
        id: request.body.id,
      },
    });
    return NextResponse.json({
      message: "Post deleted successfully",
      statusCode: 200,
      data: post,
    });
  } catch (error) {
    return NextResponse.error({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
