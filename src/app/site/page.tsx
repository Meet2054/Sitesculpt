import clsx from "clsx"; // Import the 'clsx' package
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

export default async function Home() {

  return (
    <>
      <section className="h-full w-full relative pt-36 flex items-center justify-center flex-col ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"/>
        <p className="text-center">Run your agency, in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative ">
          <h1 className="text-7xl font-bold text-center md:text-[300px]">
            SiteSculpt
          </h1>
        </div>
        <div className="flex items-center justify-center relative md:mt-[-70px]">
            <Image
             src={'/assets/preview.png'}
             alt="banner Image "
              width={1200}
               height={1200} 
               className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted" />
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10 ">
            </div>
        </div>
      </section>

      <section className="flex flex-col  justify-center items-center gap-4 md:!mt-20 mt-[-60px] ">
        <h1 className="text-center text-4xl">Choose what fits you right</h1>
        <p className="text-center text-muted-foreground">
          We have a range of products to help you grow your business
        </p>
        <div className="flex  gap-4 mt-6 flex-wrap justify-center">
          {pricingCards.map((card)=>(
            <Card  key={card.title} className={clsx('w-[300px] flex justify-between flex-col gap-2',{'border-2 border-primery': card.title==="Unlimited Saas",})}>
              <CardHeader>
                <CardTitle className={clsx("",{'text-muted-foreground': card.title !== "Unlimited Saas", })} >
                {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foregound">/m</span>
              <CardFooter className="flex flex-col items-start mt-4">
              {
                card.features.map((feature)=>(
                  <div key={feature} className="flex gap-2 items-center">
                       <Check className="text-muted-foreground"/>
                       <p>{feature}</p>
                  </div>
                ))
              }
              <Link href={`/agency?plan=${card.priceId}`} className={clsx('w-full bg-primary p-2 rounded-md text-center mt-2',{'!bg-muted-foreground': card.title!=="Unlimited Saas"})} >Set Started</Link>
              </CardFooter>
            </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
 