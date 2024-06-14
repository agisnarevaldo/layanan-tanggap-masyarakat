import Card from "../ui/admin/card";
import CardName from "../ui/admin/card-name";
import CardProfile from "../ui/admin/card-profile";

export default async function AdminPage() {
    return (
        
        <div className="flex justify-evenly w-full">
            <div className="p-5 text-white">
                <div className="mb-5">
                    <CardName />
                </div>
            

                <div className="pt-5 grid grid-cols-2 gap-x-4 gap-y-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>

            <div className="p-5">
                <CardProfile />
            </div>

        </div>
    )
}