import FeatureGrid from "@/components/main/FeatureGrid";
import * as Craft from "@/components/craft";
import BackButton from "@/components/main/BackButton";
import { Badge } from "@/components/ui/badge";

export default function feature() {
    return (
        <Craft.Section>
            <Craft.Container>
                <div> 
                    <BackButton />
                    <div className="flex flex-col gap-4">
                        <h1 className="text-primary-500 text-2xl md:text-6xl">
                            Features
                        </h1>
                        <div>
                        <Badge variant="destructive">Click on cards to know more</Badge>
                        </div>
                        <h2 className="text-lg font-light">
                        At Christ University Shop, we pride ourselves on providing an extensive 
                        range of high-quality products that showcase the spirit and pride of Christ 
                        University.
                        </h2>
                    </div>
                    <FeatureGrid />
                </div>
            </Craft.Container>
        </Craft.Section>
    )
}


