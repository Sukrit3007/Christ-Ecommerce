import * as Craft from "@/components/craft";
import BackButton from "@/components/main/BackButton";
import Image from "next/image";

export default function About() {
    return (
        <Craft.Section>
            <Craft.Container>
                <BackButton />
                <div className="flex flex-col gap-8">
                    <h1 className="text-primary-500 text-4xl md:text-6xl">
                        About
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="grid col-span-1">
                            <p>
                                <span className="text-primary-700">Welcome to Christ University Merch - Your Online Destination for Exclusive University Gear!</span>
                                <br/><br/>
                                At Christ University Merch, we're more than just an online store; we're a vibrant community hub celebrating the spirit and legacy of Christ University. Whether you're a current student, an alumnus, or a proud supporter of our esteemed institution, we invite you to explore our carefully curated collection of merchandise that reflects the essence of Christ University.
                                <br/><br/>
                                Our Story̵
                                Established with a passion for fostering connection and pride among the Christ University family, our e-commerce platform was born out of the desire to offer high-quality, officially licensed merchandise conveniently accessible to all. From apparel to accessories and everything in between, each product in our inventory is thoughtfully designed and meticulously crafted to embody the values and traditions of Christ University.
                            </p>
                        </div>
                        <div className="grid col-span-1">
                            <Image
                                src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535e9fc992502f35cd7902_peep-sitting-6.svg"
                                alt="About Image"
                                width={400}
                                height={400}
                                className="object-contain aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </Craft.Container>
        </Craft.Section>
    )
}