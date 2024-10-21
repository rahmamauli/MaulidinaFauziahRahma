import foto from "../foto.jpg";

function Profile() {
    return(
        <img src={foto.src} alt="Maulidina Fauziah" className="foto"/>
    ); 
}

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
        <h1 className= "text-gray-400 font-bold ">CV ONLINE</h1>
        <h2 className="text-3xl">Maulidina Fauziah Rahma H</h2>
      <Profile />
      <p>
        Saya adalah seorang mahasiswa semester 5 jurusan Komputerisasi Akuntansi. Saya anak ke 1 dari 4 bersaudara, Saya tinggal di Rancaekek Abdi Negara. Cita-cita saya ingin jadi orang yang bermanfaat bagi diri sendiri, keluarga dan orang lain, serta bisa menginspirasi orang lain.
      </p>
      </div>
    )
}