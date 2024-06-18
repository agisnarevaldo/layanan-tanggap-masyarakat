export default function Tabel() {
    return (

        <div className=" border-green-800 border-2 rounded-md m-5">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Jenis Laporan
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nama
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tanggal
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Keterangan
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Lokasi
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Bukti
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {/* Data rows will be inserted here dynamically */}
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            001
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            John Doe
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Aktif
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Aktif
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Aktif
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            01-01-2023
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit
                            </a>
                            <a href="#" className="text-red-600 hover:text-red-900 ml-4">
                                Hapus
                            </a>
                        </td>
                    </tr>
                    {/* More rows can be added similarly */}
                </tbody>
            </table>
        </div>
    )
}

