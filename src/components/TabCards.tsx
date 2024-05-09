import { useState } from "react";
import { Card } from "./ui/card"
import { Lightbulb, Volume2 } from "lucide-react";

const TabCards = ({ flipUpper, flipLower }: { flipUpper: string, flipLower: string }) => {
    const [flip, setFlip] = useState(false);
    return (
        <div onClick={() => setFlip(!flip)} style={{ transform: `rotateY(${flip ? 180 : 0}deg)`, transition: 'transform 0.5s ease-in-out', transformStyle: 'preserve-3d' }} className="w-full relative">
            <Card className="w-full h-96 grid grid-rows-3 text-4xl text-background cursor-pointer select-none font-bold rounded-[2.5rem] bg-gradient-to-bl from-[#051A91] to-[#1F80EB] absolute" style={{ backfaceVisibility: 'hidden' }}>
                <div className="w-full flex justify-between px-8 self-center">
                    <Lightbulb size={34} />
                    <Volume2 size={34} />
                </div>
                <h1 className="justify-self-center self-center px-6 text-center">{flipUpper}</h1>
            </Card>
            <Card className="w-full h-96 grid grid-rows-3 text-4xl text-background cursor-pointer select-none font-bold rounded-[2.5rem] bg-gradient-to-bl from-[#071844] to-[#2D87B6] absolute backface-hidden" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                <div className="w-full flex justify-between px-8 self-center">
                    <Lightbulb size={34} />
                    <Volume2 size={34} />
                </div>
                <h1 className="justify-self-center self-center px-6 text-center">{flipLower}</h1>
            </Card>
        </div>
    )
}

export default TabCards