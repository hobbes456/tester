import { useRouter } from "next/router";

const Test = () => {
    const router = useRouter();

    return <div>{router.query.slug}</div>;
};

export default Test;
