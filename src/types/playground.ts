export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot" | "system";
  time: string;
  status?: "sending" | "sent" | "delivered" | "read";
  buttons?: string[];
}

export interface SMSMessage {
  id: string;
  sender: string;
  text: string;
  time: string;
}
