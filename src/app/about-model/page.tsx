import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <section className="relative mt-10 flex min-h-screen items-center justify-center overflow-hidden px-4">

            {/* AI Model */}
            <Image
                className="animate-float
                    w-[280px]
                    sm:w-[380px]
                    md:w-[480px]
                    lg:w-[600px]"
                alt="AI Model"
                src="/aiModel1.png"
                height={600}
                width={600}
            />

            {/* Top Left - Model */}
            <div
                className="
                    absolute
                    left-4 top-16
                    max-w-[190px]
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    px-3 py-2.5
                    shadow-xl shadow-blue-500/10
                    backdrop-blur-xl
                    animate-float

                    sm:left-8 sm:top-20
                    sm:max-w-none
                    sm:px-5 sm:py-4

                    md:left-16

                    lg:left-20
                "
            >
                <p className="mb-1 text-[10px] uppercase tracking-widest text-blue-400 sm:text-xs">
                    Model
                </p>

                <p className="break-all font-mono text-[11px] text-white/90 sm:text-sm">
                    SmolLM2-135M-Instruct
                </p>
            </div>


            {/* Top Right - Parameters */}
            <div
                className="
                    absolute
                    right-4 top-20
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    px-3 py-2.5
                    shadow-xl shadow-purple-500/10
                    backdrop-blur-xl
                    animate-float

                    sm:right-8 sm:top-24
                    sm:px-5 sm:py-4

                    md:right-20

                    lg:right-40
                "
            >
                <p className="mb-1 text-[10px] uppercase tracking-widest text-purple-400 sm:text-xs">
                    Parameters
                </p>

                <p className="text-base font-semibold text-white sm:text-lg">
                    135M
                </p>
            </div>


            {/* Bottom Left - Task */}
            <div
                className="
                    absolute
                    bottom-24 left-4
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    px-3 py-2.5
                    shadow-xl shadow-cyan-500/10
                    backdrop-blur-xl
                    animate-float

                    sm:bottom-28 sm:left-10
                    sm:px-5 sm:py-4

                    md:bottom-32 md:left-24

                    lg:bottom-40 lg:left-40
                "
            >
                <p className="mb-1 text-[10px] uppercase tracking-widest text-cyan-400 sm:text-xs">
                    Task
                </p>

                <p className="text-xs text-white/90 sm:text-sm">
                    Text Generation
                </p>
            </div>


            {/* Bottom Right - Framework */}
            <div
                className="
                    absolute
                    bottom-24 right-4
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    px-3 py-2.5
                    shadow-xl shadow-indigo-500/10
                    backdrop-blur-xl
                    animate-float

                    sm:bottom-28 sm:right-10
                    sm:px-5 sm:py-4

                    md:bottom-32 md:right-20

                    lg:bottom-40 lg:right-30
                "
            >
                <p className="mb-1 text-[10px] uppercase tracking-widest text-indigo-400 sm:text-xs">
                    Framework
                </p>

                <p className="font-mono text-xs text-white/90 sm:text-sm">
                    Transformers
                </p>
            </div>

        </section>
    )
}