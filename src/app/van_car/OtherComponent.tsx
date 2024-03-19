import * as React from 'react';

const OtherComponent: React.FC<{ selectedCountry: string }> = ({ selectedCountry }) => {
    return (
        <div>
            <p>ข้อมูลจังหวัดที่ได้รับ: {selectedCountry}</p>
            {/* ทำสิ่งที่ต้องการกับข้อมูลที่ได้รับได้ที่นี่ */}
        </div>
    );
};

export default OtherComponent;
