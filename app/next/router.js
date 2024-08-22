import { useRouter } from 'next/router';

const MyComponent = () => {
    const router = useRouter();

    // After successful sign-up
    const handleSignUp = () => {
        router.push('/dashboard');
    };

    return (
        <button onClick={handleSignUp}>Sign Up</button>
    );
};

export default MyComponent;
