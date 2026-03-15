export type User = {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
};

export type Scenario = {
    id: string;
    name: string;
    description: string;
    launchDate: Date;
    status: 'pending' | 'in_progress' | 'completed';
};

export type Threat = {
    id: string;
    name: string;
    description: string;
    level: 'low' | 'medium' | 'high';
};

export type Alert = {
    id: string;
    message: string;
    createdAt: Date;
    severity: 'info' | 'warning' | 'critical';
};

export type Notification = {
    id: string;
    userId: string;
    alertId: string;
    sentAt: Date;
};