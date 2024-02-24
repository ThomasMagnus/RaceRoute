export class Track {

    public firstId: number;
    public secondId: number;
    public distance: number;
    public surface: Surface;
    public maxSpeed: MaxSpeed;

    constructor(firstId: number, secondId: number, distance: number, surface: Surface, maxSpeed: MaxSpeed)
    {
        this.firstId = firstId;
        this.secondId = secondId;
        this.distance = distance;
        this.surface = surface;
        this.maxSpeed = maxSpeed;
    }
}

export enum Surface {
    SAND, 
    ASPHALT, 
    GROUND
}

export const Surface2 = ["SAND", "ASPHALT", "GROUND"]

export enum MaxSpeed {
    FAST,
    NORMAL,
    SLOW
}