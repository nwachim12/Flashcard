import { AppBar, Container, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import SignUp from '../../components/SignUp'; // Ensure this import is correct

export default function SignUpPage() {
    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
                <Toolbar>
                    <Typography 
                        variant="h6" 
                        sx={{ flexGrow: 1, fontFamily: 'Inter, sans-serif' }} // Custom font
                    >
                        Flashcard Generator
                    </Typography>
                    <Button 
                        sx={{ 
                            color: 'white', // Text color
                            backgroundColor: '#ff4081', // Background color
                            '&:hover': { backgroundColor: '#ff79b0' }, // Hover effect
                            fontFamily: 'Inter, sans-serif' // Custom font
                        }}
                    >
                        <Link href="/sign-in" passHref>
                            Login
                        </Link>
                    </Button>
                    <Button 
                        sx={{ 
                            color: '#ffffff', 
                            backgroundColor: '#2196f3', 
                            '&:hover': { backgroundColor: '#64b5f6' },
                            fontFamily: 'Lato, sans-serif' 
                        }}
                    >
                        <Link href="/sign-up" passHref>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 4 }}
            >
                <Typography 
                    variant="h4" 
                    sx={{ mb: 4, fontFamily: 'Inter, sans-serif' }} // Custom font for the title
                >
                    Sign Up
                </Typography>
                <SignUp /> 
            </Box>
        </Container>
    );
}
