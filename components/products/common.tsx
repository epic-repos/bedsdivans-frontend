import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BedSizeProps } from "typings/product";
import styles from "styles/NewProductPage.module.scss";
import { useRouter } from "next/router";

const CommonForBed = (props: BedSizeProps) => {
    const router = useRouter();

    const { value, items, onClickItem } = props;
    const [icons, setIcons] = useState<any>([]);

    useEffect(() => {
        if (!items) return;
        switch (items.type) {
            case "BED":
                setIcons(items?.productsPayload?.availabeSizes);
                break;
            case "COLOR":
                const colors =
                    items?.productsPayload?.variants[0]?.accessories?.color?.map(
                        (item: any) => item.name
                    );

                setIcons(colors);

                break;
            case "HEADBOARD":
                const headboards =
                    items?.productsPayload?.variants[0]?.accessories?.headboard?.map(
                        (item: any) => item.name
                    );

                setIcons(headboards);

                break;
            case "STORAGE":
                const storages =
                    items?.productsPayload?.variants[0]?.accessories?.storage?.map(
                        (item: any) => item.name
                    );

                setIcons(storages);
                break;
            case "FEET":
                const feet =
                    items?.productsPayload?.variants[0]?.accessories?.feet?.map(
                        (item: any) => item.name
                    );

                setIcons(feet);
                break;
            case "MATTRESS":
                const mattress =
                    items?.productsPayload?.variants[0]?.accessories?.mattress?.map(
                        (item: any) => item.name
                    );

                setIcons(mattress);
                break;

            default:
                break;
        }
    }, [items]);

    const handleClick = (data: any) => {
        if (!items) return;
        switch (items.type) {
            case "BED":
                router.push({
                    pathname: `/products/${items?.productsPayload?._id}`,
                    query: { size: data.value },
                });
                break;
            case "COLOR":
                var findColor =
                    items?.productsPayload?.variants[0]?.accessories?.color.find(
                        (item: any) => item.name.value == data.value
                    );
                onClickItem(findColor);
                break;

            case "HEADBOARD":
                var findHeadboard =
                    items?.productsPayload?.variants[0]?.accessories?.headboard.find(
                        (item: any) => item.name.value == data.value
                    );
                console.log({ findHeadboard: findHeadboard?.price });
                onClickItem(findHeadboard);
                break;

            case "STORAGE":
                var findStorage =
                    items?.productsPayload?.variants[0]?.accessories?.storage.find(
                        (item: any) => item.name.value == data.value
                    );

                console.log({ findStorage: findStorage?.price });
                onClickItem(findStorage);

                break;

            case "FEET":
                var findFeet =
                    items?.productsPayload?.variants[0]?.accessories?.feet.find(
                        (item: any) => item.name.value == data.value
                    );

                console.log({ findFeet: findFeet?.price });
                onClickItem(findFeet);

                break;

            case "MATTRESS":
                var findMattress =
                    items?.productsPayload?.variants[0]?.accessories?.mattress.find(
                        (item: any) => item.name.value == data.value
                    );

                console.log({ findMattress: findMattress?.price });
                onClickItem(findMattress);

                break;

            default:
                break;
        }
    };

    console.log({ icons, payload: items.productsPayload.availabeSizes });

    return (
        <React.Fragment>
            <div className={styles.color}>
                <ul className={styles.texture}>
                    {icons?.map((data: any, index: number) => (
                        <li
                            key={index}
                            onClick={() => handleClick(data)}
                            style={{
                                border: `2px solid ${
                                    value === data?.value
                                        ? "#20323e"
                                        : "transparent"
                                }`,
                            }}
                        >
                            <Image
                                src={data?.image || "/image.png"}
                                width={100}
                                height={56}
                                alt=""
                            />
                            <span className={styles.name}>
                                {data.label}{" "}
                                <span className={styles.price}>
                                    {data.price}
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default CommonForBed;
