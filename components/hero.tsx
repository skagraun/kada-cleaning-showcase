"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { useSectionInView } from "@/lib/hooks";
import { Link } from "@/i18n/routing";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import carouselImg01 from "@/public/heroesImg/001.png";
import carouselImg02 from "@/public/heroesImg/002.png";
import carouselImg03 from "@/public/heroesImg/003.png";

const HeroSection = () => {
  const t = useTranslations("hero");
  const tNav = useTranslations("nav");
  const { ref } = useSectionInView(tNav("home"));

  const features = [t("feature1"), t("feature2"), t("feature3")];

  return (
    <section ref={ref} id="kezdolap" className="scroll-mt-20 pt-16 sm:pt-20">
      <div className="relative w-full overflow-hidden">
        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent className="-ml-0">
              <CarouselItem className="pl-0">
                <Image
                  src={carouselImg01}
                  alt={t("imgAlt1")}
                  width={2400}
                  height={800}
                  className="object-cover w-full h-[300px] sm:h-[500px] md:h-[700px]"
                  priority
                />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <Image
                  src={carouselImg02}
                  alt={t("imgAlt2")}
                  width={2400}
                  height={800}
                  className="object-cover w-full h-[300px] sm:h-[500px] md:h-[700px]"
                />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <Image
                  src={carouselImg03}
                  alt={t("imgAlt3")}
                  width={2400}
                  height={800}
                  className="object-cover w-full h-[300px] sm:h-[500px] md:h-[700px]"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl"
            >
              {/* Badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {t("badge")}
              </motion.div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t("title1")}
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t("title2")}
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/80 text-base sm:text-lg mb-8 max-w-lg hidden sm:block">
                {t("description")}
              </p>

              {/* Features */}
              <div className="hidden md:flex flex-wrap gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 text-white/90 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-primary/25 transition-all duration-300"
                >
                  <Link href="/#kapcsolat" className="flex items-center gap-2">
                    {t("cta")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
