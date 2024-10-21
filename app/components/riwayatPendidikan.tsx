function RowRiwayat(props:any) {
    return (
        <div className="border-2 border-blue-500/75 rounded-lg bg-white-800 p-2 my-5">
        <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
        <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
        <div className="col-span-12 md:col-span-4">{props.tahun}</div>
        </div>
        </div>
        </div> 
    );
}

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pendidikan</h2>

        <RowRiwayat jenjang="SD" sekolah="SDN Abdi Negara" tahun="2011-2016"/>
        <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Rancaekek" tahun="2016-2019"/>
        <RowRiwayat jenjang="SMA" sekolah="MA Baitul Arqom Al-Islami" tahun="2019-2022"/>
        <RowRiwayat jenjang="Universitas Ma'soem" sekolah="Prodi D3 Komputerisasi Akuntansi" tahun="2022-Sekarang"/>
      </div>
    );
}