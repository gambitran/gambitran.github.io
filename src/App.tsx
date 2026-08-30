import { Box, IconButton, Link, Tooltip, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import './App.css'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/tantran-',
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/gambitran',
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    label: 'Email',
    href: 'mailto:contact@tantran.io',
    icon: <EmailIcon fontSize="large" />,
  },
]

function App() {
  return (
    <Box
      className="page"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        className="fade-in fade-in-1"
        sx={{ fontWeight: 700, color: '#fff', letterSpacing: 2 }}
      >
        Tan Tran
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        className="fade-in fade-in-2"
        sx={{ color: 'rgba(255,255,255,0.85)', mt: 1, mb: 4, fontWeight: 300 }}
      >
        SRE | DevOps | IT
      </Typography>

      <Box className="fade-in fade-in-3" sx={{ display: 'flex', gap: 2 }}>
        {socials.map(({ label, href, icon }) => (
          <Tooltip key={label} title={label} arrow>
            <IconButton
              component={Link}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              sx={{
                color: 'rgba(255,255,255,0.9)',
                '&:hover': { color: '#fff', transform: 'translateY(-3px)' },
                transition: 'color 0.2s, transform 0.2s',
                bgcolor: 'rgba(255,255,255,0.08)',
              }}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  )
}

export default App
