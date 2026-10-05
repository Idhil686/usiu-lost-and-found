import Card from "./card";
export default function services() {
    return (
        <div className="Services">
            <h1 className="servicesTitle"> Our Services</h1>
            <div className="CardServices">
                <Card 
                title="Report Lost Item"
                 description="submit lost items for claiming ">


                </Card>

                <Card 
                title="claims items"
                 description="show proof of ownership and claim your lost items ">
                    
                </Card>

                <Card
                title="lost an Item?"
                description="report if you have lost items">
                    
                </Card>

            </div>
        </div>
    );
}