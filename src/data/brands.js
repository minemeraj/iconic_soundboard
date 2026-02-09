import netflixLogo from '../assets/logos/netflix.png';
import hboLogo from '../assets/logos/hbo.png';
import playstationLogo from '../assets/logos/playstation.png';
import intelLogo from '../assets/logos/intel.png';
import mcdonaldsLogo from '../assets/logos/mcdonalds.png';
import bmwLogo from '../assets/logos/bmw.png';

export const brands = [
    {
        id: 'netflix',
        name: 'Netflix',
        logo: netflixLogo,
        youtubeId: 'fUiJulYbUaE', // Stranger Things trailer with Netflix intro at 1:46
        startTime: 106, // 1 min 46 sec
        duration: 2,
        color: '#E50914', // Netflix Red
        description: 'Tudum'
    },
    {
        id: 'hbo',
        name: 'HBO',
        logo: hboLogo,
        youtubeId: 'zls2YQDGIqY',
        startTime: 0,
        duration: 5,
        color: '#FFFFFF', // HBO White (classic static)
        description: 'Static Angel'
    },
    {
        id: 'playstation',
        name: 'PlayStation',
        logo: playstationLogo,
        youtubeId: 'oAhvQoLpvsM', // (Verified Working) Classic PS1 startup
        startTime: 0,
        duration: 8,
        color: '#003791', // PlayStation Blue
        description: 'Startup'
    },
    {
        id: 'intel',
        name: 'Intel',
        logo: intelLogo,
        youtubeId: '_y3o4z_e7xU', // "Intel Bong Sound Effect" - generic upload
        startTime: 0,
        duration: 3,
        color: '#0068B5', // Intel Blue
        description: 'Bong'
    },
    {
        id: 'mcdonalds',
        name: 'McDonald\'s',
        logo: mcdonaldsLogo,
        youtubeId: '6jJkdRaa04g', // Just the audio logo, likely easier
        startTime: 0,
        duration: 3,
        color: '#FFC72C', // McDonald's Yellow
        description: 'I\'m Lovin\' It'
    },
    {
        id: 'bmw',
        name: 'BMW',
        logo: bmwLogo,
        youtubeId: 'qZ7IWJLrxZo', // Keeping BMW for now as it seemed to be a comparison video
        startTime: 0,
        duration: 4,
        color: '#0066B1', // BMW Blue
        description: 'Engine'
    }
];
