import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Get the form data from the request
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get the API endpoint from environment variables
    const apiEndpoint = process.env.NEXT_PUBLIC_CONSOLE_API_URL;

    if (!apiEndpoint) {
      console.error('NEXT_PUBLIC_CONSOLE_API_URL is not defined in environment variables');
      return NextResponse.json(
        { error: 'API endpoint not configured' },
        { status: 500 }
      );
    }

    // Prepare the data to send to your external API
    const contactData = {
      firstName,
      lastName,
      email,
      message,
      source: 'RC Books',
      submittedAt: new Date().toISOString(),
    };

    // Make the API call to your external endpoint
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    // Check if the external API call was successful
    if (!response.ok) {
      const errorData = await response.text();
      console.error('External API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: response.status }
      );
    }

    // Get the response from the external API
    const responseData = await response.json();

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        data: responseData,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

