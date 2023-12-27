'use client'

import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Button = ({ children, id }) => {

    const router = useRouter()
    const removeTopic = async () => {
        const res = await fetch(`http://localhost:3000/api/message?id=${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            router.refresh()
            toast.success('Sucessful')
        }
    };
    return (
        <div>
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                        className: 'bg-white',
                        duration: 3000,
                        style: {
                            background: '#fff',
                            color: '#000',
                        },

                        success: {
                            duration: 1000,
                            theme: {
                                primary: 'green',
                                secondary: 'white',
                            },
                        },
                    }}
                />
            </div>
            <button onClick={removeTopic} className="outline-none bg-[#f1efef] w-9 h-9 rounded-full flex items-center justify-center">
                {children}
            </button>
        </div>
    );
};

export default Button;
