import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
    photo: File | null;
    setPhoto: (file: File | null) => void;
};

export default function PhotoUpload({ photo, setPhoto }: Props) {
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (!photo) {
            setPreview(null);
            return;
        }
        const objectUrl = URL.createObjectURL(photo);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl); // clean up memory
    }, [photo]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhoto(file);
        }
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium">Upload Cover Photo</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            {preview && (
                <div className="relative mt-4 w-full h-64">
                    <Image
                        src={preview}
                        alt="Preview"
                        fill
                        className="rounded-xl object-cover"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            )}
        </div>
    );
}
