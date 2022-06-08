import { useRouter } from "next/router";
import Link from "next/link";

const ParkInfo = () => {
    const router = useRouter();
    return (
        
    <div>Park {router.query.park}
       <Link href="/">
           <a> Back to Home</a>
       </Link>
       <Link href="/park-info/CastlePark">
           <a> Dynamic</a>
       </Link>
    </div>
    );
};

export default ParkInfo;