/* Supabase Client Configuration
 * Initializes Supabase client for contact form submissions
 * Includes Resend email notifications
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jgopwxorwuuladhyrzht.supabase.co";
const supabaseAnonKey =
  "sb_publishable_e5SqdvMiMs5l-w4cM4Qq_w_ne_5DFsr";

const resendApiKey = "re_8Hfrh3Lg_4mRi1Qocn6VH4HNCmz6nPjf4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactMessage {
  full_name: string;
  email: string;
  phone_number?: string;
  service_interested_in?: string;
  message: string;
}

async function sendEmailNotification(data: ContactMessage): Promise<void> {
  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Message</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Name:</strong> ${data.full_name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone_number || "N/A"}</p>
          <p><strong>Service Interested In:</strong> ${data.service_interested_in || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: white; padding: 10px; border-left: 3px solid #FFA500;">${data.message}</p>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "chinadetective8848@gmail.com",
        subject: "New Contact Form Submission - China Detective Agency",
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      console.error("Resend API error:", await response.text());
    }
  } catch (err) {
    console.error("Email notification error:", err);
    // Don't throw - we still want to save the message even if email fails
  }
}

export async function submitContactMessage(
  data: ContactMessage
): Promise<{ success: boolean; error?: string }> {
  try {
    // Save to Supabase
    const { error } = await supabase
      .from("contact_messages")
      .insert([data]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    // Send email notification (non-blocking)
    await sendEmailNotification(data);

    return { success: true };
  } catch (err) {
    console.error("Submit error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
