import { motion, AnimatePresence } from "framer-motion";
import { Quote, RefreshCw, Sparkles } from "lucide-react";
import { useQuotes } from "@/hooks/useQuotes";
import { Button } from "@/components/ui/button";

export const QuoteCard = () => {
  const { data: quote, isLoading, refetch, isFetching } = useQuotes();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-6 shadow-md"
    >
      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-secondary/10 blur-2xl" />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary/10 p-2">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Daily Inspiration
            </h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => refetch()}
            disabled={isFetching}
            className="h-8 w-8"
          >
            <RefreshCw
              className={`h-4 w-4 text-muted-foreground ${isFetching ? "animate-spin" : ""}`}
            />
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <div className="h-4 bg-muted/50 rounded animate-pulse w-full" />
              <div className="h-4 bg-muted/50 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-muted/50 rounded animate-pulse w-1/2" />
            </motion.div>
          ) : (
            <motion.div
              key={quote?.content}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <Quote className="absolute -left-1 -top-1 h-6 w-6 text-primary/30" />
                <p className="pl-6 text-lg leading-relaxed text-foreground italic">
                  {quote?.content}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm font-medium text-secondary">
                  — {quote?.author}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
