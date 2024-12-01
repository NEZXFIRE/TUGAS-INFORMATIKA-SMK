const animeList = [
    {
        title: "Naruto",
        synopsis: "Seorang ninja muda yang bercita-cita menjadi Hokage, pemimpin desanya, sambil menghadapi berbagai rintangan dan musuh.",
        image: "images/naruto.jfif",
        type: "anime",
        rating: "⭐8,20"
    },
    {
        title: "Attack on Titan",
        synopsis: "Manusia berjuang melawan raksasa pemakan manusia di dunia penuh misteri dan konflik.",
        image: "images/aot.jfif",
        type: "anime",
        rating: "⭐8,40"
    },
    {
        title: "Demon Slayer",
        synopsis: "Seorang pemuda memburu iblis untuk membalas dendam keluarganya yang terbunuh dan menyelamatkan adiknya.",
        image: "images/kimetsu.jfif",
        type: "anime",
        rating: "⭐8,00"
    },
    {
        title: "Fate/stay night",
        synopsis: "Seorang pemuda terjebak dalam Perang Cawan Suci, di mana tujuh Master dan Servant bertarung demi satu keinginan.",
        image: "images/Fate sn.jpg",
        type: "anime",
        rating: "⭐7,40"
    },
    {
        title: "Re:Zero",
        synopsis: "Seorang pemuda yang terus kembali hidup setelah mati, berusaha mengubah nasib di dunia fantasi yang berbahaya.",
        image: "images/Re zero.jpg",
        type: "anime",
        rating: "⭐8,45"
    },
    {
        title: "Kaiju No. 8",
        synopsis: "Seorang pria yang bisa berubah menjadi kaiju berusaha menyembunyikan identitasnya sambil melawan monster.",
        image: "images/kaiju no8.jpg",
        type: "anime",
        rating: "⭐8,10"
    },
    {
        title: "86",
        synopsis: "Menceritakan perjuangan para pilot muda melawan drone otonom di tengah perang brutal.",
        image: "images/86.jpeg",
        type: "anime",
        rating: "⭐8,80"
    },
    {
        title: "Aoki Hagane no Arpeggio",
        synopsis: "Kapal perang modern berwujud gadis humanoid berjuang melawan armada misterius yang mendominasi lautan.",
        image: "images/aoki hagane.jpeg",
        type: "anime",
        rating: "⭐7,73"
    },
    {
        title: "Arifureta",
        synopsis: "Seorang pemuda yang dikhianati di dunia fantasi berjuang bertahan hidup sambil menemukan kekuatan baru.",
        image: "images/arifureta.jpg",
        type: "anime",
        rating: "⭐7,78"
    },
    {
        title: "Danmachi",
        synopsis: "Seorang petualang muda mencari kekuatan dan cinta di kota yang dipenuhi dungeon dan dewa.",
        image: "images/danmachi.jpeg",
        type: "anime",
        rating: "⭐7,94"
    },
    {
        title: "Kaguya-sama: Love is War",
        synopsis: "Perang psikologis antara dua siswa jenius yang saling suka, tapi enggan mengaku lebih dulu.",
        image: "images/kaguya sama.jpg",
        type: "anime",
        rating: "⭐8,15"
    },
    {
        title: "Date A Live",
        synopsis: "Seorang pemuda harus menenangkan roh-roh kuat dengan cara yang tidak biasa: berkencan dengan mereka.",
        image: "images/DAL.jpeg",
        type: "anime",
        rating: "⭐7,50"
    },
    {
        title: "Rikei ga Koi ni Ochita no de Shoumei shitemita",
        synopsis: "Dua ilmuwan jenius berusaha membuktikan cinta mereka melalui penelitian ilmiah yang konyol.",
        image: "images/rikekoi.jpeg",
        type: "anime",
        rating: "⭐7,72"
    },
    {
        title: "Isekai Shikkaku",
        synopsis: "Kisah pria yang hidup dengan depresi di dunia fantasi dan selalu mencoba bundir.",
        image: "images/isekai bundir.jpg",
        type: "anime",
        rating: "⭐7,40"
    },
    {
        title: "Mairimashita! Iruma-kun",
        synopsis: "Seorang anak manusia diadopsi oleh seorang iblis dan berusaha bertahan di dunia iblis.",
        image: "images/iruma.jpg",
        type: "anime",
        rating: "⭐8,20"
    },
    {
        title: "Fate/Zero",
        synopsis: "Prekuel dari Fate/stay night, menceritakan Perang Cawan Suci yang berlangsung 10 tahun sebelumnya.",
        image: "images/fate zero.jpg",
        type: "anime",
        rating: "⭐8,15"
    },
    {
        title: "Giji Harem",
        synopsis: "Kisah romcom harem sekolahan tapi cuma dengan satu wanita? emang bisa? yah itulah yang akan di ceritakan di anime ini.",
        image: "images/giji harem.jpeg",
        type: "anime",
        rating: "⭐7,21"
    },
    {
        title: "KonoSuba",
        synopsis: "Seorang pemuda yang bereinkarnasi di dunia fantasi menjalani kehidupan petualangan konyol bersama teman-teman eksentriknya.",
        image: "images/konosuba.jpg",
        type: "anime",
        rating: "⭐8,13"
    },
    {
        title: "Ansatsu no Kyoushitsu",
        synopsis: "Seorang makhluk luar angkasa berbentuk gururuku yang dikenal sebagai Korosensei menjadi guru di kelas 3-E, tempat para siswa yang dianggap gagal di sekolah. Meskipun ancaman akan kehancuran dunia, Korosensei berusaha mengajarkan murid-muridnya dengan cara yang unik dan menyenangkan.",
        image: "images/korosensei.jpeg",
        type: "anime",
        rating: "⭐7,96"
    },
    {
        title: "Mayonaka Heart Tune",
        synopsis: "Cerita mengikuti seorang pemuda yang tiba-tiba berhadapan dengan dunia penuh misteri dan perasaan yang rumit. Dalam dunia tersebut, ia mulai menemukan hubungan yang mengubah hidupnya bersama teman-teman eksentriknya.",
        image: "images/mayonaka.jpeg",
        type: "manga",
        rating: "⭐7,76"
    },
    {
        title: "No Game No Life",
        synopsis: "Sora dan Shiro, dua gamer jenius yang tak terkalahkan, dipanggil ke dunia lain oleh Dewa Tet. Di dunia ini, semua masalah diselesaikan dengan permainan. Bersama-sama, mereka berusaha menaklukkan dunia ini dengan kecerdikan mereka.",
        image: "images/ngnl.jpeg",
        type: "anime",
        rating: "⭐9,81"
    },
   {
        title: "Owari no Seraph",
        synopsis: "Di masa depan, umat manusia hampir punah setelah virus memusnahkan orang dewasa. Vampir muncul dan mengambil alih dunia, menguasai manusia sebagai budak. Yuuichirou, seorang anak yang kehilangan keluarga, berjuang untuk membalas dendam dan merebut kembali kebebasan.",
        image: "images/owariserap.jpeg",
        type: "anime",
        rating: "⭐7,78"
    },
    {
        title: "Frieren",
        synopsis: "Setelah mengalahkan Raja Iblis, penyihir Frieren memulai perjalanan baru untuk menemukan makna dari hidup yang panjang dan persahabatan yang telah berlalu. Dia bertemu dengan generasi baru dan melanjutkan pencarian untuk menebus kesalahannya di masa lalu.",
        image: "images/prieren.jpg",
       type: "anime",
       rating: "⭐8,96"
   },
   {
       title: "Sword Art Online",
       synopsis: "Para pemain yang terjebak dalam dunia virtual MMORPG yang bernama Sword Art Online harus bertarung untuk bertahan hidup. Kirito, salah satu pemain, berusaha untuk keluar dari dunia ini dengan berjuang melalui rintangan yang semakin berat.",
       image: "images/sao.jpg",
       type: "anime",
       rating: "⭐8,16"
    },
   {
        title: "Shin no Nakama ja Nai to Yuusha no Party",
        synopsis: "Seorang pemuda yang diusir dari kelompok pahlawan karena dianggap lemah memulai hidup baru bersama teman-teman baru. Dalam perjalanan mereka, dia menemukan kemampuan baru yang membuatnya menjadi kekuatan besar yang tak terduga.",
        image: "images/shinnakama.jpg",
        type: "anime",
        rating: "⭐7,06"
    },
    {
        title: "Tate no Yuusha",
        synopsis: "Naofumi Iwatani dipanggil ke dunia fantasi sebagai Pahlawan Perisai. Dikhianati dan difitnah, Naofumi harus berjuang dengan keterbatasannya untuk melindungi dunia dan orang-orang yang dia cintai.",
        image: "images/tate yusha.jpg",
        type: "anime",
        rating: "⭐8,26"
    },
    {
        title: "Tsue to Tsurugi no Wistoria",
        synopsis: "Dalam akademi sihir, will tidak bisa memakai sihir jadi dia harus bertahan di sana dengan cara yang sangat sulit.",
        image: "images/tsue to wistoria.jpeg",
        type: "anime",
        rating: "⭐8,13"
    },
    {
        title: "Yuusha Shoukan ni Makikomareta Kedo Isekai wa Heiwa Deshita",
        synopsis: "Setelah dipanggil ke dunia lain sebagai pahlawan, protagonis menemukan dunia yang tampaknya damai dan penuh kebaikan. Namun, dia segera menyadari bahwa kehadirannya mungkin membawa perubahan yang lebih besar daripada yang dia kira.",
        image: "images/yuusha shokan.jpeg",
        type: "manga",
        rating: "⭐8,36"
    },
    {
        title: "Kage no Jitsuryokusha",
        synopsis: "Seorang pemuda dengan kemampuan luar biasa berusaha untuk hidup sebagai orang biasa. Namun, dia diam-diam membangun organisasi bawah tanah yang kuat dan memainkan peran sebagai 'penguasa bayangan' untuk melindungi dunia dari ancaman tersembunyi.",
        image: "images/shadow.jpeg",
        type: "anime",
        rating: "⭐8,13"
    },
    {
        title: "Tsuihousareru Tabi ni Skill wo Te Ni Ireta Ore ga 100 no Isekai de 2-Shuume Musou",
        synopsis: "setelah dibuang dari party dia malah senang? harus di tendang dari 100 dunia yang berbeda untuk kembali ke dunia asalnya.",
        image: "images/100 pintu dunia.jpeg",
        type: "manga",
        rating: "⭐8,01"
     }
];

const animeListContainer = document.querySelector('.anime-list');

animeList.forEach(anime => {
    const animeCard = document.createElement('div');
    animeCard.classList.add('anime-card');

    // Tambahkan elemen gambar
    const animeImage = document.createElement('img');
    animeImage.src = anime.image;  // Set the image source

    const animeTitle = document.createElement('h2');
    animeTitle.textContent = anime.title;

    const animeSynopsis = document.createElement('p');
    animeSynopsis.textContent = anime.synopsis;

    // Tambahkan elemen untuk type (kategori)
    const animeType = document.createElement('span');
    animeType.classList.add('anime-type');
    animeType.textContent = anime.type;  // Misalnya 'Anime' atau 'Manga'

    // Tambahkan elemen untuk rating
    const animeRating = document.createElement('span');
    animeRating.classList.add('anime-rating');
    animeRating.textContent = `${anime.rating}`;  // Menampilkan rating

    // Masukkan elemen-elemen ke dalam card
    animeCard.appendChild(animeImage);
    animeCard.appendChild(animeTitle);
    animeCard.appendChild(animeSynopsis);
    animeCard.appendChild(animeType);  // Masukkan jenis ke dalam card
    animeCard.appendChild(animeRating);  // Masukkan rating ke dalam card
    animeListContainer.appendChild(animeCard);
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleSearchButton = document.querySelector('.toggle-search');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.searchTerm');

    // Tampilkan atau sembunyikan kotak pencarian
    toggleSearchButton.addEventListener('click', () => {
        searchContainer.classList.toggle('hidden');
    });

    // Filter anime saat mengetik di input pencarian
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredAnime = animeList.filter(anime => anime.title.toLowerCase().includes(query));

        // Hapus anime list lama
        animeListContainer.innerHTML = '';

        // Tambahkan anime yang sesuai dengan pencarian
        filteredAnime.forEach(anime => {
            const animeCard = document.createElement('div');
            animeCard.classList.add('anime-card');

            const animeImage = document.createElement('img');
            animeImage.src = anime.image;

            const animeTitle = document.createElement('h2');
            animeTitle.textContent = anime.title;

            const animeSynopsis = document.createElement('p');
            animeSynopsis.textContent = anime.synopsis;

            // Tambahkan elemen untuk type (kategori)
            const animeType = document.createElement('span');
            animeType.classList.add('anime-type');
            animeType.textContent = anime.type;  // Misalnya 'Anime' atau 'Manga'

            // Tambahkan elemen untuk rating
            const animeRating = document.createElement('span');
            animeRating.classList.add('anime-rating');
            animeRating.textContent = `${anime.rating}`;  // Menampilkan rating

            animeCard.appendChild(animeImage);
            animeCard.appendChild(animeTitle);
            animeCard.appendChild(animeSynopsis);
            animeCard.appendChild(animeType);  // Masukkan jenis ke dalam card
            animeCard.appendChild(animeRating);  // Masukkan rating ke dalam card
            animeListContainer.appendChild(animeCard);
        });

        // Jika tidak ada hasil
        if (filteredAnime.length === 0) {
            animeListContainer.innerHTML = '<p>Tidak ada anime yang cocok dengan pencarian Anda.</p>';
        }
    });
});