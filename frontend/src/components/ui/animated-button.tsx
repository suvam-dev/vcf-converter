"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AnimatedButton = React.forwardRef<HTMLButtonElement, ButtonProps & HTMLMotionProps<"button">>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn("inline-block", className)}
      >
        <Button variant={variant} size={size} ref={ref} className="w-full" {...props} />
      </motion.div>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";
