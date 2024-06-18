"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@/app/ui/button";
import ButtonModal from "@/app/ui/modal";

const EditLaporan = ({ params }: any) => {
	const { id } = params || {};
	const [category, setCategory] = useState("");
	const [waktu, setWaktu] = useState("");
	const [nama, setNama] = useState("");
	const [tanggal, setTanggal] = useState("");
	const [bukti, setBukti] = useState<File | null>(null);
	const [lokasi, setLokasi] = useState("");
	const [keterangan, setKeterangan] = useState("");
	const [loading, setLoading] = useState(true);

	const formatTanggal = (tanggal: string) => {
		const date = new Date(tanggal);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		
		return `${year}-${month}-${day}T${hours}:${minutes}`;
	  };

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/api/reports/${id}`);
			const data = await response.json();
			setCategory(data[0].category);
			setNama(data[0].nama);
			setBukti(null); // Reset bukti to null, as we don't have the file itself
			setLokasi(data[0].lokasi);
			setKeterangan(data[0].keterangan);
			setWaktu(data[0].waktu);
			setTanggal(formatTanggal(data[0].tanggal));
			setLoading(false);

			console.log(data);
			console.log(typeof data);

			console.log("Category:", category);
			console.log("Waktu:", waktu);
			console.log("Nama:", nama);
			console.log("Tanggal:", tanggal);
			console.log("Bukti:", bukti);
			console.log("Lokasi:", lokasi);
			console.log("Keterangan:", keterangan);
		};

		if (id) {
			fetchData();
		}
	}, [bukti, category, id, keterangan, lokasi, nama, tanggal, waktu]);

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append("category", category);
		formData.append("waktu", waktu);
		formData.append("nama", nama);
		formData.append("tanggal", tanggal);
		if (bukti) {
			formData.append("bukti", bukti);
		}
		formData.append("lokasi", lokasi);
		formData.append("keterangan", keterangan);

		const response = await fetch(`/api/reports/${id}`, {
			method: "PUT",
			body: formData,
		});
		
		if (response.ok) {
			console.log("Data updated successfully");
			console.log(formData);
			// Redirect or show success message
		} else {
			console.error("Failed to update data");
			console.log(formData);
		}
	};

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<main className="px-4 mx-auto max-w-4xl">
			<form onSubmit={handleSubmit}>
				<div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
					<div>
						<label
							htmlFor="category"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Jenis Laporan
						</label>
						<select
							id="kategori"
							defaultValue={category}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
							onChange={(event) => setCategory(event.target.value)}
						>
							<option value="" disabled>
								Pilih Laporan Anda
							</option>
							<option value="kesehatan">Kesehatan</option>
							<option value="bencana alam">Bencana Alam</option>
							<option value="Kebakaran">Kebakaran</option>
							<option value="kesepian">Kesepian</option>
						</select>
					</div>
					<div>
						<label
							htmlFor="waktu"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Waktu
						</label>
						<input
							type="time"
							name="waktu"
							id="waktu"
							defaultValue={waktu}
							onChange={(event) => setWaktu(event.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
							placeholder="Type product name"
							required
						/>
					</div>
					<div className="w-full">
						<label
							htmlFor="nama"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Nama Pelapor
						</label>
						<input
							type="text"
							name="nama"
							id="nama"
							defaultValue={nama}
							onChange={(event) => setNama(event.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
							placeholder="Nama Pelapor"
							required
						/>
					</div>
					<div className="w-full">
						<label
							htmlFor="tanggal"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Tanggal
						</label>
						<input
							type="datetime-local"
							name="tanggal"
							id="tanggal"
							defaultValue={tanggal}
							onChange={(event) => setTanggal(event.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
							placeholder="Tanggal Kejadian"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="bukti"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Bukti Kejadian
						</label>
						<input
							type="file"
							name="bukti"
							id="bukti"
							onChange={(event) => setBukti(event.target.files?.[0] || null)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
							placeholder="Upload bukti laporan"
						/>
					</div>
					<div>
						<label
							htmlFor="lokasi"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Lokasi
						</label>
						<input
							type="text"
							name="lokasi"
							id="lokasi"
							defaultValue={lokasi}
							onChange={(event) => setLokasi(event.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
							placeholder="Lokasi Kejadian"
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="keterangan"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Keterangan
						</label>
						<textarea
							id="keterangan"
							rows={8}
							name="keterangan"
							defaultValue={keterangan}
							onChange={(event) => setKeterangan(event.target.value)}
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
							placeholder="Keterangan Laporan"
						/>
					</div>
				</div>
				<div className="flex items-center justify-end gap-2">
					<Link
						href="/home"
						className="w:-1/12 sm:w-1/6 text-center text-primary rounded-full items-center px-5 py-2.5 mt-4 text-sm font-medium border border-[#436850]"
					>
						Batalkan
					</Link>
					<ButtonModal />
				</div>
			</form>
		</main>
	);
};

export default EditLaporan;
