import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from "@/lib/utils";

// GlowCard - Card con efecto glow en los bordes
export function GlowCard({ 
  children, 
  className, 
  glowColor = "var(--color-accent)", 
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & { glowColor?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden group", 
        className
      )}
      style={{
        background: "var(--color-card)",
      }}
      {...props}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// GradientText - Texto con gradiente dinámico
export function GradientText({
  children,
  className,
  from = "var(--color-primary)",
  to = "var(--color-secondary)",
  direction = "to right",
  animate = false,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  from?: string;
  to?: string;
  direction?: string;
  animate?: boolean;
}) {
  return (
    <h2
      className={cn(
        "font-display font-bold bg-clip-text text-transparent bg-gradient-to-r", 
        animate && "animate-gradient-text",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(${direction}, ${from}, ${to})`,
        backgroundSize: animate ? "200% 200%" : "100% 100%"
      }}
      {...props}
    >
      {children}
    </h2>
  );
}

// SlashSection - Sección con fondo en diagonal
export function SlashSection({ 
  children, 
  className, 
  angle = -3,
  bgColor = "var(--color-muted)",
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & { 
  angle?: number;
  bgColor?: string;
}) {
  return (
    <div
      className={cn(
        "relative py-20 overflow-hidden",
        className
      )}
      {...props}
    >
      <div 
        className="absolute inset-0 -z-10 transform" 
        style={{ 
          transform: `skewY(${angle}deg)`, 
          background: bgColor
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        {children}
      </div>
    </div>
  );
}

// AnimatedStaggerChildren - Anima los hijos en secuencia
export function AnimatedStaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            variants: {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            },
            transition: { duration: 0.5 }
          });
        }
        return child;
      })}
    </motion.div>
  );
}

// MusicWave - Onda de sonido animada para elementos musicales
export function MusicWave({
  className,
  color = "var(--color-secondary)",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  color?: string;
}) {
  return (
    <div className={cn("flex items-end h-6 gap-[2px]", className)} {...props}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            height: ["40%", "90%", "40%", "70%", "40%"],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

// GlassMorphism - Componente con efecto de vidrio
export function GlassMorphism({
  children,
  className,
  blur = "16px",
  opacity = 0.6,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  blur?: string;
  opacity?: number;
}) {
  return (
    <div
      className={cn(
        "backdrop-blur-md rounded-xl border border-white/10",
        className
      )}
      style={{
        backdropFilter: `blur(${blur})`,
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// ParallaxWrapper - Contenedor con efecto parallax
export function ParallaxWrapper({
  children,
  className,
  speed = 0.5,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  speed?: number;
}) {
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ y: 0 }}
      whileInView={{ y: -50 * speed }}
      viewport={{ once: false }}
      transition={{ type: "tween", ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// NeonButton - Botón con efecto de neón
export function NeonButton({
  children,
  className,
  color = "var(--color-secondary)",
  hoverColor = "var(--color-primary)",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  hoverColor?: string;
}) {
  return (
    <button
      className={cn(
        "relative px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--glow-color),0.8)]",
        className
      )}
      style={{
        backgroundColor: color,
        "--glow-color": hoverColor,
      } as React.CSSProperties}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" style={{
        background: `linear-gradient(45deg, ${color}, ${hoverColor})`,
      }} />
    </button>
  );
}

// AngleDecoration - Decoración en ángulo para secciones
export function AngleDecoration({
  className,
  color = "var(--color-accent)",
  width = "150px",
  height = "4px",
  angle = 45,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  color?: string;
  width?: string;
  height?: string;
  angle?: number;
}) {
  return (
    <div
      className={cn("mb-6", className)}
      {...props}
    >
      <div
        className="rounded-full"
        style={{
          width,
          height,
          backgroundColor: color,
          transform: `rotate(${angle}deg)`,
        }}
      />
    </div>
  );
}

// FloatingElement - Elemento que flota suavemente
export function FloatingElement({
  children,
  className,
  amplitude = 10, // píxeles
  duration = 4,   // segundos
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={cn("", className)}
      animate={{
        y: [0, amplitude, 0, -amplitude, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
