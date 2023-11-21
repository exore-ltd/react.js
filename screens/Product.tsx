import { RouteProp } from "@react-navigation/native"
import { useTranslation } from "react-i18next"

import { SafeArea } from "../../components/SafeArea/SafeArea"
import { Header } from "../../components/Header/Header"
import { useProduct } from "./useProduct"
import { EditProduct } from "../../components/EditProduct/EditProduct"

interface IProps {
    route: RouteProp<{ params: { id: string } }, "params">
}

export const Product = ({ route }: IProps) => {
    const { t } = useTranslation()
    const {
        categories,
        handleGoBack,
        handleDeleteImage,
        productPhotoToDelete,
        deleteProductPhotoLoading,
        selectedProduct,
        selectedProductLoading,
        handleAddPhoto,
        amountOfPictures,
        confirmChanges,
        buttonText,
    } = useProduct(route)

    return (
        <SafeArea>
            <Header
                text={t("PRODUCT.EDIT")!}
                withBackBtn
                onBackPress={handleGoBack}
                loading={selectedProductLoading}
            />
            {selectedProduct && (
                <EditProduct
                    product={selectedProduct}
                    categories={categories}
                    amountOfPictures={amountOfPictures}
                    confirmChanges={confirmChanges}
                    selectedProductLoading={selectedProductLoading}
                    handleDeleteImage={handleDeleteImage}
                    buttonText={buttonText || ""}
                    handleAddPhoto={handleAddPhoto}
                    productPhotoToDelete={productPhotoToDelete}
                    deleteProductPhotoLoading={deleteProductPhotoLoading}
                />
            )}
        </SafeArea>
    )
}
