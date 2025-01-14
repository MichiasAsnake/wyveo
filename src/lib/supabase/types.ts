export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          title: string;
          description: string;
          image_url: string;
          category: string;
          tags: string[];
          client_name: string | null;
          completion_date: string;
          link: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          title: string;
          description: string;
          image_url: string;
          category: string;
          tags: string[];
          client_name?: string | null;
          completion_date: string;
          link?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          title?: string;
          description?: string;
          image_url?: string;
          category?: string;
          tags?: string[];
          client_name?: string | null;
          completion_date?: string;
          link?: string | null;
        };
      };
      service_packages: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          type: string;
          name: string;
          description: string;
          price: number;
          features: Json;
          popular_choice: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          type: string;
          name: string;
          description: string;
          price: number;
          features: Json;
          popular_choice?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          type?: string;
          name?: string;
          description?: string;
          price?: number;
          features?: Json;
          popular_choice?: boolean;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          company: string | null;
          budget: string;
          timeline: string;
          project_details: string;
          status: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          company?: string | null;
          budget: string;
          timeline: string;
          project_details: string;
          status?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          company?: string | null;
          budget?: string;
          timeline?: string;
          project_details?: string;
          status?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
} 