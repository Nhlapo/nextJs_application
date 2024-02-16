import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Oooooooops.....</h1>
            <p>Page not Found</p>
            <p>Go back to the <Link href="/"> Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;