import * as Craft from "@/components/craft";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NewArrival from "@/components/main/NewArrival";
import FeatureGrid from "@/components/main/FeatureGrid";
import FAQ from "@/components/main/Faqs";
import { Badge } from "@/components/ui/badge";


const Hero = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="not-prose flex flex-col gap-24">
          <Button asChild className="w-fit h-9" variant="expandIcon" Icon={ArrowRight} iconPlacement="right">
              <Link href="/products">
                Shop Now
              </Link>
            </Button>
          <div className="flex flex-col gap-6 ">
            <h1 className="text-primary-500 text-4xl md:text-6xl">
              Christ University Shop
            </h1>
            <h2 className="text-xl md:text-3xl font-light">
              Welcome to the Christ University Shop! Explore our curated collection of Christ University
              merchandise. From classic apparel to stylish accessories, shop now and wear your Crusader pride
              with flair!
            </h2>
            <div className="my-8 h-96 w-full overflow-hidden border rounded-lg md:rounded-xl md:h-[480px]">
              <Image
                className="h-full w-full object-cover object-bottom"
                src="https://images.unsplash.com/photo-1602503646837-18427748b271?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1920}
                height={1080}
                alt="hero image"
              />
            </div>
          </div>

          {/* NEW Arrival */}
          <div>
            <NewArrival />
          </div>
          
          {/* FAQ */}
          <div>
            <FAQ />
          </div>

        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Hero;