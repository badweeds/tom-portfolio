import { motion } from 'motion/react';

export function Background3D() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px' }}>
      {/* Deep space gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0D0D0D] to-[#050508]" />

      {/* Atmospheric glow effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/2 w-[700px] h-[700px] bg-cyan-500/15 rounded-full blur-[140px]"
        />
      </div>

      {/* Center spotlight for portrait */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[500px] h-[700px] bg-gradient-radial from-white/5 via-transparent to-transparent blur-3xl"
        />
      </div>

      {/* Floating 3D geometric shapes */}

      {/* Large cube - back left */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[15%] left-[10%] w-32 h-32"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {/* Cube faces */}
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20" style={{ transform: 'translateZ(64px)' }} />
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20" style={{ transform: 'translateZ(-64px) rotateY(180deg)' }} />
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20" style={{ transform: 'rotateY(90deg) translateZ(64px)' }} />
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20" style={{ transform: 'rotateY(-90deg) translateZ(64px)' }} />
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20" style={{ transform: 'rotateX(90deg) translateZ(64px)' }} />
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20" style={{ transform: 'rotateX(-90deg) translateZ(64px)' }} />
        </div>
      </motion.div>

      {/* Medium octahedron - top right */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateZ: [0, 360],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[15%]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
          <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-cyan-500/20"
               style={{ transform: 'translateZ(50px)' }} />
          <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[100px] border-t-purple-500/20"
               style={{ transform: 'translateZ(-50px) rotateX(180deg)' }} />
        </div>
      </motion.div>

      {/* Small icosahedron - mid left */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateZ: [0, -360],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[50%] left-[5%] w-24 h-24 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 backdrop-blur-sm border border-cyan-400/30 rounded-lg"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(45deg) rotateY(45deg)' }}
      />

      {/* Glassmorphism floating panels */}

      {/* Large panel - back right */}
      <motion.div
        animate={{
          rotateY: [0, 15, 0],
          rotateX: [0, -10, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[30%] right-[8%] w-64 h-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-100px) rotateY(-20deg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl" />
      </motion.div>

      {/* Medium panel - mid right */}
      <motion.div
        animate={{
          rotateY: [0, -12, 0],
          rotateX: [0, 8, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[25%] right-[20%] w-48 h-56 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-50px) rotateY(15deg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-2xl" />
      </motion.div>

      {/* Small panel - top left */}
      <motion.div
        animate={{
          rotateY: [0, 10, 0],
          rotateX: [0, -5, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[40%] left-[15%] w-40 h-48 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-80px) rotateY(25deg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 rounded-2xl" />
      </motion.div>

      {/* Floating rings */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[15%] left-[25%]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="w-40 h-40 rounded-full border-4 border-cyan-500/20" style={{ transform: 'rotateY(60deg)' }} />
        <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-blue-500/20" style={{ transform: 'rotateY(-60deg)' }} />
      </motion.div>

      {/* Small floating spheres with glow */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className="absolute w-4 h-4 rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: i % 2 === 0
              ? 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(6, 182, 212, 0) 70%)'
              : 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(168, 85, 247, 0) 70%)',
            boxShadow: i % 2 === 0
              ? '0 0 20px rgba(6, 182, 212, 0.6)'
              : '0 0 20px rgba(168, 85, 247, 0.6)',
          }}
        />
      ))}

      {/* Wireframe grid - bottom */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 right-0 h-[400px]"
        style={{
          transform: 'rotateX(75deg) translateZ(-100px)',
          transformOrigin: 'bottom',
          background: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(6, 182, 212, 0.1) 39px, rgba(6, 182, 212, 0.1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(6, 182, 212, 0.1) 39px, rgba(6, 182, 212, 0.1) 40px)',
        }}
      />

      {/* Particle field */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            y: [Math.random() * window.innerHeight, -100],
            x: [0, Math.sin(i) * 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 4px rgba(6, 182, 212, 0.8)',
          }}
        />
      ))}

      {/* Depth of field vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
    </div>
  );
}
