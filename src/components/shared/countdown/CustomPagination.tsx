import React, { useState } from "react";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
}) => {
    const [inputPage, setInputPage] = useState(currentPage.toString());

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPage(e.target.value);
    };

    const handleInputBlur = () => {
        const pageNumber = Number(inputPage);
        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        } else {
            setInputPage(currentPage.toString());
        }
    };

    return (
        <div className="flex items-center gap-2 p-2 border rounded-lg shadow-md w-fit">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
            >
                ◀
            </button>

            <span className="text-sm font-semibold">Trang</span>

            <input
                type="text"
                value={inputPage}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="w-12 px-2 py-1 text-center border rounded"
            />

            <span className="text-sm">/ {totalPages}</span>

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
            >
                ▶
            </button>
        </div>
    );
};

export default CustomPagination;
