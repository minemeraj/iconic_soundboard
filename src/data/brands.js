import netflixLogo from '../assets/logos/netflix.png';
import netflixSound from '../assets/sounds/netflix.mp3';
import hboLogo from '../assets/logos/hbo.png';
import hboSound from '../assets/sounds/hbo.mp3';
import playstationLogo from '../assets/logos/playstation.png';
import playstationSound from '../assets/sounds/playstation.mp3';
import intelLogo from '../assets/logos/intel.png';
import intelSound from '../assets/sounds/intel.mp3';
import mcdonaldsLogo from '../assets/logos/mcdonalds.png';
import mcdonaldsSound from '../assets/sounds/mcdonalds.mp3';
import bmwLogo from '../assets/logos/bmw.png';
import bmwSound from '../assets/sounds/bmw.mp3';

export const brands = [
    {
        id: 'netflix',
        name: 'Netflix',
        logo: netflixLogo,
        sound: netflixSound,
        color: '#E50914', // Netflix Red
        description: 'Tudum'
    },
    {
        id: 'hbo',
        name: 'HBO',
        logo: hboLogo,
        sound: hboSound,
        color: '#FFFFFF', // HBO White (classic static)
        description: 'Static Angel'
    },
    {
        id: 'playstation',
        name: 'PlayStation',
        logo: playstationLogo,
        sound: playstationSound,
        color: '#003791', // PlayStation Blue
        description: 'Startup'
    },
    {
        id: 'intel',
        name: 'Intel',
        logo: intelLogo,
        sound: intelSound,
        color: '#0068B5', // Intel Blue
        description: 'Bong'
    },
    {
        id: 'mcdonalds',
        name: 'McDonald\'s',
        logo: mcdonaldsLogo,
        sound: mcdonaldsSound,
        color: '#FFC72C', // McDonald's Yellow
        description: 'I\'m Lovin\' It'
    },
    {
        id: 'bmw',
        name: 'BMW',
        logo: bmwLogo,
        sound: bmwSound,
        color: '#0066B1', // BMW Blue
        description: 'Engine'
    }
];
