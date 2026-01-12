/* Supabase Client Configuration
 * Initializes Supabase client for contact form submissions
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jgopwxorwuuladhyrzht.supabase.co";
const supabaseAnonKey =
  "sb_publishable_e5SqdvMiMs5l-w4cM4Qq_w_ne_5DFsr";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactMessage {
  full_name: string;
  email: string;
  phone_number?: string;
  service_interested_in?: string;
  message: string;
}

export async function submitContactMessage(
  data: ContactMessage
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from("contact_messages")
      .insert([data]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Submit error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
