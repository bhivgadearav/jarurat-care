import { useQuery } from "@tanstack/react-query";

interface Quote {
  content: string;
  author: string;
}

// Custom inspirational quotes related to blood donation and helping others
const fallbackQuotes: Quote[] = [
  {
    content: "The blood you donate gives someone another chance at life.",
    author: "Unknown",
  },
  {
    content: "Donate blood, save life. The life you save could be your own.",
    author: "Unknown",
  },
  {
    content: "Every blood donor is a hero.",
    author: "World Health Organization",
  },
  {
    content: "Your blood donation is a gift of life.",
    author: "American Red Cross",
  },
  {
    content: "Be the reason someone smiles today. Be a blood donor.",
    author: "Unknown",
  },
];

const fetchQuote = async (): Promise<Quote> => {
  try {
    const response = await fetch("https://api.quotable.io/random?tags=inspirational|motivational");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const data = await response.json();
    return {
      content: data.content,
      author: data.author,
    };
  } catch (error) {
    // Return a random fallback quote if API fails
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
  }
};

export const useQuotes = () => {
  return useQuery({
    queryKey: ["quote"],
    queryFn: fetchQuote,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 25000,
    retry: 1,
  });
};
