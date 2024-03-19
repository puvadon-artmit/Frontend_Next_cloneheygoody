"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Link from 'next/link'







interface SearchResult {
    link: string;
    title: string;
    snippet: string;
    displayLink: string;
}

export default function Content() {
    
    const acgURL = process.env.NEXT_PUBLIC_APP_ACG_URL;
    const API_KEY = process.env.NEXT_PUBLIC_APP_API_KEY;
    const CX = process.env.NEXT_PUBLIC_APP_CX;

    const [query, setQuery] = React.useState('');
    const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);

    const handleSearch = () => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${encodeURIComponent(query)}&siteSearch=${acgURL}`)
            .then(response => response.json())
            .then(data => {
                setSearchResults(data.items || []);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '20px',
                        padding: '20px',
                    }}
                >
                    <TextField
                        label="พิมพ์เพื่อค้นหา"
                        variant="outlined"
                        fullWidth
                        sx={{ maxWidth: '900px', marginBottom: '20px' }}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={handleSearch}>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSearch();
                            }
                        }}
                    />

                    {searchResults.length > 0 && (
                        <Box sx={{ marginTop: '20px', width: '80%', margin: '0 auto' }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '16px', md: '16px' },
                                    color: '#888888',
                                }}
                            >
                                พบ "<span style={{ color: '#00CC00' }}>{query}</span>" ทั้งหมด ({searchResults.length}) รายการ
                            </Typography>
                            {searchResults.map((result, index) => (
                                <div className='mt-4 ' key={index}>
                                    <Link href={result.link}>
                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontSize: { xs: '16px', md: '16px' },
                                                color: '#6666FF',
                                            }}
                                        >
                                            {result.title}
                                        </Typography>
                                    </Link>
                                    <p dangerouslySetInnerHTML={{
                                        __html: result.snippet.replace(
                                            new RegExp(query, 'gi'),
                                            `<span style="color: #00CC00;">${query}</span>`
                                        )
                                    }} />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#888888',
                                            fontSize: { xs: '12px', md: '12px' },
                                        }}
                                    >
                                        {result.displayLink}
                                    </Typography>
                                </div>
                            ))}
                        </Box>
                    )}
                </Box>
            </Container>
        </React.Fragment>
    );
}