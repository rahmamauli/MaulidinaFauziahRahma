function RowPekerjaan(props:any) {
    return (
        <div className="border-2 border-blue-500/75 rounded-lg bg-white-800 p-2 my-5">
        <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 md:col-span-4">{props.sebagai}</div>
        <div className="col-span-12 md:col-span-4">{props.instansi}</div>
        <div className="col-span-12 md:col-span-4">{props.tahun}</div>
        </div>
        </div>
        </div> 
    );
}

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pekerjaan</h2>

        <RowPekerjaan sebagai="HRD" instansi="PT Freeport Tbk" tahun="2025"/>
        <RowPekerjaan sebagai="Digital Marketing" instansi="PT Adhi Karya Tbk" tahun="2024"/>
        <RowPekerjaan sebagai="Social Media Creator" instansi="PT Indofood Tbk" tahun="2026"/>
        <RowPekerjaan sebagai="Staff Admin" instansi="PT Adaro Minerals" tahun="2024"/>
      </div>
    );
}