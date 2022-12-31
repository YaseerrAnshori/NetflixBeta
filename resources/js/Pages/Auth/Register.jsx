import { useEffect } from "react";
import Input from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Label from "@/Components/InputLabel";
import Button from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />

            <div className="min-h-screen px-3 mx-auto text-white bg-black max-w-screen md:px-10">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]"  onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        forInput="name"
                                        value="Full Name"
                                    />
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Your fullname..."
                                        value={data.name}
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.fullname} className="mt-2" />
                                </div>
                                <div>
                                    <Label
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        value={data.email}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <Label
                                        forInput="password"
                                        value="Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        value={data.password}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div>
                                    <Label
                                        forInput="password_confirmation"
                                        value="Confirm Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Password Confirmation"
                                        value={data.password_confirmation}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="submit"  processing={processing}>
                                    <span className="text-base text-white">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href={route("login")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
