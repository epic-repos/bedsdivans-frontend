import React from "react";
import Router from "next/router";
import Input from "components/element/input";
import Button from "components/element/button";
import css from "styles/auth.module.scss";
import { useLogin } from "network-requests/mutations";
import useInputs from "hooks/useInputs";

const LoginPage = () => {
    const { inputs, onChangeInputs } = useInputs({
        email: "",
        password: "",
    });

    const { mutate } = useLogin();

    const handleSubmit = React.useCallback(
        (e: React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            mutate(inputs, {
                onSuccess: () => {
                    Router.push("/");
                },
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [inputs]
    );

    return (
        <div className={css.container}>
            <form className={css.login} onSubmit={handleSubmit}>
                <div className={css.heading}>
                    <h2>Login</h2>
                </div>
                <Input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    label={"Email"}
                    value={inputs.email}
                    onChange={onChangeInputs}
                />
                <Input
                    name="password"
                    type="password"
                    label={"Password"}
                    placeholder="Enter your password"
                    value={inputs.password}
                    onChange={onChangeInputs}
                />
                <div className={css.controls}>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    );
};
export default LoginPage;
