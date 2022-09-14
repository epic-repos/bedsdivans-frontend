import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BedSizeProps } from "typings/product";
import styles from "styles/NewProductPage.module.scss";
import { useRouter } from "next/router";

const CommonForBed = (props: BedSizeProps) => {
    const { value, items, onClickItem } = props;
    const [icons, setIcons] = useState<any>();

    useEffect(() => {
        if (!items) return;
        switch (items.type) {
            case "BED":
                if (!items?.bedIcons && !items?.productsPayload) return;
                var temp: any = [];
                items?.bedIcons?.map((item: any) => {
                    if (
                        items?.productsPayload?.availabeSizes?.includes(
                            String(item.size)
                        )
                    ) {
                        temp.push(item);
                    }
                });
                break;
            case "COLOR":
                if (!items?.colorIcons && !items?.productsPayload) return;
                console.log("CASE COLOR", items?.productsPayload?.variants[0]);

                var temp: any = [];
                items?.colorIcons?.map((item: any) => {
                    items?.productsPayload?.variants[0]?.accessories?.color?.map(
                        (color: any) => {
                            console.log({
                                item: item.content,
                                color: color.name,
                            });
                            if (item.content == color.name) temp.push(item);
                        }
                    );
                });

                break;
            case "HEADBOARD":
                if (!items?.headBoardIcons && !items?.productsPayload) return;
                console.log("CASE COLOR", items?.productsPayload?.variants[0]);

                var temp: any = [];
                items?.headBoardIcons?.map((item: any) => {
                    items?.productsPayload?.variants[0]?.accessories?.headboard?.map(
                        (color: any) => {
                            console.log({
                                item: item.content,
                                color: color.name,
                            });
                            if (item.content == color.name) temp.push(item);
                        }
                    );
                });
                break;
            case "STORAGE":
                if (!items?.storageIcons && !items?.productsPayload) return;
                console.log("CASE COLOR", items?.productsPayload?.variants[0]);

                var temp: any = [];
                items?.storageIcons?.map((item: any) => {
                    items?.productsPayload?.variants[0]?.accessories?.storage?.map(
                        (color: any) => {
                            console.log({
                                item: item.content,
                                color: color.name,
                            });
                            if (item.content == color.name) temp.push(item);
                        }
                    );
                });
                break;
            case "FEET":
                if (!items?.feetIcons && !items?.productsPayload) return;
                console.log("CASE COLOR", items?.productsPayload?.variants[0]);

                var temp: any = [];
                items?.feetIcons?.map((item: any) => {
                    items?.productsPayload?.variants[0]?.accessories?.feet?.map(
                        (color: any) => {
                            console.log({
                                item: item.content,
                                color: color.name,
                            });
                            if (item.content == color.name) temp.push(item);
                        }
                    );
                });
                break;
            case "MATTRESS":
                if (!items?.mattressIcons && !items?.productsPayload) return;
                console.log("CASE COLOR", items?.productsPayload?.variants[0]);

                var temp: any = [];
                items?.mattressIcons?.map((item: any) => {
                    items?.productsPayload?.variants[0]?.accessories?.mattress?.map(
                        (color: any) => {
                            console.log({
                                item: item.content,
                                color: color.name,
                            });
                            if (item.content == color.name) temp.push(item);
                        }
                    );
                });
                break;

            default:
                break;
        }

        setIcons(temp);
    }, [items]);

    console.log({ icons });

    const router = useRouter();

    const handleClick = (data: any) => {
        if (!items) return;
        switch (items.type) {
            case "BED":
                router.push({
                    pathname: `/products/${items?.productsPayload?._id}`,
                    query: { size: data.size },
                });
                break;
            case "COLOR":
                var findColor =
                    items?.productsPayload?.variants[0]?.accessories?.color?.find(
                        (color: any) => color.name == data.content
                    );
                onClickItem(findColor);
                break;
            case "HEADBOARD":
                var findHeadboard =
                    items?.productsPayload?.variants[0]?.accessories?.headboard?.find(
                        (color: any) => color.name == data.content
                    );
                console.log({ findHeadboard: findHeadboard?.price });
                onClickItem(findHeadboard);
                break;

            case "STORAGE":
                var findStorage =
                    items?.productsPayload?.variants[0]?.accessories?.storage?.find(
                        (color: any) => color.name == data.content
                    );
                console.log({ findStorage: findStorage?.price });
                onClickItem(findStorage);

                break;

            case "FEET":
                var findFeet =
                    items?.productsPayload?.variants[0]?.accessories?.feet?.find(
                        (color: any) => color.name == data.content
                    );
                console.log({ findFeet: findFeet?.price });
                onClickItem(findFeet);

                break;

            case "MATTRESS":
                var findMattress =
                    items?.productsPayload?.variants[0]?.accessories?.mattress?.find(
                        (color: any) => color.name == data.content
                    );
                console.log({ findMattress: findMattress?.price });
                onClickItem(findMattress);

                break;

            default:
                break;
        }
    };

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
                                    value === data?.content
                                        ? "#20323e"
                                        : "transparent"
                                }`,
                            }}
                        >
                            <Image
                                src={data?.iconUrl}
                                width={100}
                                height={56}
                                alt=""
                            />
                            <span className={styles.name}>
                                {data.content}{" "}
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
