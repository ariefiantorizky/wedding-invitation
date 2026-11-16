import type { WeddingConfig } from "./types";

/**
 * ============================================================
 *  DATA UNDANGAN ASLI KAMU — file ini TIDAK ikut ter-commit (.gitignore).
 *  Edit isinya, lalu `npm run dev` untuk melihat hasil.
 *  Foto pribadi taruh di public/private/, lalu `npm run images`.
 *  Backup file ini (mis. ke Google Drive) — tidak ada salinannya di GitHub.
 * ============================================================
 */
export const wedding: WeddingConfig = {
    theme: "samudra",
    allowThemePreview: false,

    site: {
        url: "https://bit.ly/pernikahan-galang-hikmah",
        description:
            "Dengan memohon rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.",
        ogImage: "/images/og.jpg",
        indexable: false,
    },

    timezone: "WIB",

    couple: {
        order: "groom-first",
        groom: {
            nickname: "Galang",
            fullName: "Galang",
            photo: "/images/couple/groom.webp",
            childOrder: "Putra kedua dari",
            father: "Bapak Udin",
            mother: "Ibu Novianti",
        },
        bride: {
            nickname: "Hikmah",
            fullName: "Hikmah",
            photo: "/images/couple/bride.webp",
            childOrder: "Putri kedua dari",
            father: "Bapak Alm. Bachtiar",
            mother: "Ibu Yulia Ningsih",
        },
        hashtag: "#GalangHikmahHalalJourney",
    },

    coverImage: "/images/gallery/prewedding-5.webp",
    heroImage: "/images/gallery/prewedding-4.webp",

    events: [
        {
            title: "Pernikahan",
            date: "2027-01-17",
            start: "09:00",
            end: "22:00",
            venue: "Rumah Mempelai Pria",
            address:
                "Jl. Nimun Raya No.28, RT.2/RW.10, Kby. Lama Sel., Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240",
            mapsUrl: "https://maps.app.goo.gl/vT4faKX6jQCPCxneA",
            note: "",
        },
    ],

    // colors: 'theme' = otomatis mengikuti tema. Atau custom, contoh:
    // colors: ['#F4F7FB', { hex: '#7F9DC2', name: 'Dusty Blue' }]
    dressCode: {
        colors: "theme",
    },

    quote: {
        arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ",
        translation:
            "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
        source: "QS. Ar-Rum : 21",
    },

    story: {
        enabled: false,
        items: [
            {
                date: "Januari 2024",
                title: "Pertama Bertemu",
                description:
                    "Atas izin Allah, kami dipertemukan di sebuah kajian di Bandung. Sederhana, tapi ternyata jadi awal segalanya.",
                image: "/images/story/first-meet.webp",
            },
        ],
    },

    gallery: {
        enabled: true,
        photos: [
            {
                src: "/images/gallery/prewedding-1.webp",
                alt: "Foto prewedding 1",
            },
            // { src: "/images/gallery/moment-1.webp", alt: "Foto prewedding 2" },
            {
                src: "/images/gallery/prewedding-2.webp",
                alt: "Foto prewedding 3",
            },
            {
                src: "/images/gallery/prewedding-3.webp",
                alt: "Foto prewedding 4",
            },
            {
                src: "/images/gallery/prewedding-5.webp",
                alt: "Foto prewedding 5",
            },
            // { src: "/images/gallery/moment-2.webp", alt: "Foto prewedding 6" },
            {
                src: "/images/gallery/prewedding-4.webp",
                alt: "Foto prewedding 7",
            },
            // { src: "/images/gallery/moment-3.webp", alt: "Foto prewedding 8" },
        ],
        youtube: "",
    },

    liveStream: {
        enabled: false,
        platform: "YouTube",
        url: "https://youtube.com/live/",
    },

    rsvp: {
        enabled: false,
        whatsapp: "081234567890",
        maxGuests: 3,
        deadline: "2027-05-08",
    },

    wishes: {
        enabled: false,
        pageSize: 8,
    },

    gift: {
        enabled: false,
        collapsed: true,
        accounts: [
            {
                type: "ewallet",
                provider: "GoPay",
                number: "081234567890",
                holder: "Raka Pratama",
                logo: "/images/logos/gopay.webp",
            },
        ],
        address: {
            recipient: "Galang",
            phone: "+62 857-8049-2617",
            address:
                "Jl. Nimun Raya No.28, RT.2/RW.10, Kby. Lama Sel., Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240",
        },
    },

    music: {
        enabled: true,
        src: "/music/song1.mp3",
        title: "Backsound",
    },

    googleSheets: {
        url: "",
    },

    checkin: {
        enabled: true,
    },

    photobooth: {
        enabled: false,
        hashtag: "#GalangHikmahHalalJourney",
    },

    effects: {
        envelope: true,
        tapBurst: true,
        parallax: true,
    },

    copy: {
        coverLabel: "selamat datang di pernikahan",
        localGreeting: "Assalamualaikum",
        coverTo: "Kepada Yth. Bapak/Ibu/Saudara/i",
        coverButton: "Buka Undangan",
        coverNote: "Mohon maaf apabila ada kesalahan penulisan nama/gelar",
        salam: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
        opening:
            "Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:",
        closing:
            "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
        closingSalam: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
        localThanks: "Terima Kasih",
        familiesTitle: "Kami yang berbahagia",
        families: [
            "Kel. Bapak Udin & Ibu Noviyanti",
            "Kel. Bapak Alm. Bachtiar & Ibu Yulia Ningsih",
        ],
    },
};
