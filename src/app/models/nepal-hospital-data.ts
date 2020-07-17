export class NepalHospitalData {
    data: [
        {
            _id: number;
            location: {
                type: string;
                coordinates: [];
            }
            is_full: boolean;
            government_approved: boolean;
            name: string;
            contact_person: string;
            contact_person_number: number;
            address: string;
            phone: number;
            website: string;
            email: string;
            notes: string;
            hospital_id: string;
            state: number;
            image_url: string;
            source: string;
            capacity: {
                beds: number;
                ventilators: string;
                isolation_beds: number;
                occupied_beds: number;
                doctors: number;
                nurses: number;
            }
            created_at: Date;
            updated_at: Date;
            __v: number;
        }
    ]
}