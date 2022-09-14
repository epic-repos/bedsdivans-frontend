/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Styles from "styles/commerce/order.module.scss";

import CommerceLayout from "components/admin/commerce/layout";
import Input from "components/admin/element/input";
import AddMoreButton from "components/admin/element/addmore";
import Button from "components/admin/element/button";
import replacer from "utils/replacer";
import extraSpace from "utils/extraspace";
import { useCreateBedColor } from "network-requests/mutations";
// const [dropWDownload, dropWDownloadActive] = useState(false);

function AddColorPage() {
    const [activeTab, setActiveTab] = React.useState("General");

    const onActiveTab = (value: string) => {
        setActiveTab(value);
    };

    return (
        <CommerceLayout>
            <div className={Styles.rightsidebar}>
                <div className={Styles.topheaderdashboard}>
                    <div className={Styles.leftside}>
                        <div className={Styles.topsearch}>
                            <input type="text" placeholder="Type Hare...." />
                            <button>
                                <Image
                                    src="/icons/search-line.svg"
                                    alt="search"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                    </div>
                    <div className={Styles.rightside}>
                        <div className={Styles.dropdownaction}>
                            <div className={Styles.userimagewithtext}>
                                <div className={Styles.image}>
                                    <Image
                                        src="/icons/user-line.svg"
                                        alt="search"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div className={Styles.text}>Acme Inc.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <main className={Styles.main}>
                    <div className={Styles.containerbox}>
                        <div className={Styles.mainheading}>Add Color</div>

                        <div
                            className={` ${Styles.tablebox} ${Styles.mt2} ${Styles.productuploadtabbox}`}
                        >
                            <ul className={Styles.productuploadtab}>
                                {TabArray.map(({ value }, index) => {
                                    return (
                                        <li
                                            key={index}
                                            onClick={() => onActiveTab(value)}
                                            className={
                                                value === activeTab
                                                    ? Styles.active
                                                    : ""
                                            }
                                        >
                                            {value}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className={Styles.tabbox}>
                                {/* {activeTab} */}
                                <TabsRender tabName={activeTab} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </CommerceLayout>
    );
}

export default AddColorPage;

const TabsRender = ({ tabName }: any) => {
    switch (tabName) {
        case "General":
            return <AddColor />;
        case "Size":
            return (
                <div className="tabcontantinner">
                    <h1>Size</h1>
                </div>
            );
        case "Color":
            return (
                <div className="tabcontantinner">
                    <h1>Color</h1>
                </div>
            );
        case "HeadBoard":
            return (
                <div className="tabcontantinner">
                    <h1>HeadBoard</h1>
                </div>
            );
        case "Storage":
            return (
                <div className="tabcontantinner">
                    <h1>Storage</h1>
                </div>
            );
        case "Feet":
            return (
                <div className="tabcontantinner">
                    <h1>Feet</h1>
                </div>
            );
        case "Mattress":
            return (
                <div className="tabcontantinner">
                    <h1>Mattress</h1>
                </div>
            );

        default:
            return null;
    }
};

const TabArray = [
    {
        value: "General",
    },
    //   {
    //     value: "Size",
    //   },
    //   {
    //     value: "Color",
    //   },
    //   {
    //     value: "HeadBoard",
    //   },
    //   {
    //     value: "Storage",
    //   },
    //   {
    //     value: "Feet",
    //   },
    //   {
    //     value: "Mattress",
    //   },
];

const AddColor = () => {
    interface InputTypes {
        label: string;
        value: string;
        image: File;
    }

    //API POST
    const { mutate } = useCreateBedColor();

    const [inputValue, setInputValue] = React.useState<InputTypes>({
        label: "",
        value: "",
        image: "" as any,
    });

    const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "image") {
            if (!e.target.files) return;
            return setInputValue({
                ...inputValue,
                [e.target.name]: e.target.files[0],
            });
        } else {
            //remove extra spaces regex
            setInputValue({ ...inputValue, [e.target.name]: e.target.value });
        }
    };

    const handleImageURL = (image: File | null) => {
        if (!image) return "";
        return URL.createObjectURL(image);
    };

    const handleIconUpload = () => {
        if (!inputValue.image || !inputValue.label || !inputValue.value) return;

        mutate(inputValue, {
            onSuccess: (data) => {
                console.log(data);
            },
        });
    };

    React.useEffect(() => {
        setInputValue((prev) => ({
            ...prev,
            value: replacer(inputValue.label),
        }));
    }, [inputValue.label]);

    return (
        <div className="tabcontantinner">
            <h1>Color</h1>
            <div className="box">
                <ul>
                    <li>
                        <Input
                            name="label"
                            type="text"
                            label={"Color Name"}
                            value={extraSpace(inputValue.label)}
                            onChange={onChangeInputs}
                        />
                    </li>
                    <li>
                        <Input
                            value={inputValue.value}
                            type="text"
                            name="value"
                            label={"Color Value"}
                            onChange={onChangeInputs}
                        />
                    </li>
                    <li>
                        <Input
                            name="image"
                            type="file"
                            label={"Featured Image"}
                            onChange={onChangeInputs}
                            ImageElement={
                                <img
                                    src={
                                        handleImageURL(inputValue.image) ||
                                        "/fake.png"
                                    }
                                    alt="color Image"
                                    width={50}
                                    height={50}
                                />
                            }
                        />
                    </li>
                </ul>
                <div className={Styles.buttonsection}>
                    <Button onClick={handleIconUpload}>Submit</Button>
                </div>
            </div>
        </div>
    );
};
