import {Grid, Card, CardContent, Typography, LinearProgress, Avatar, Box} from '@mui/material';

const supportWorkers = [
    {
        supportWorkerId: 1,
        contractedHours: 15,
        name: 'Andrew',
        avatar: 'https://avatars.githubusercontent.com/u/62837?s=70&v=4',
    },
    {
        supportWorkerId: 2,
        contractedHours: 15,
        name: 'Vinny',
        avatar: 'https://avatars.githubusercontent.com/u/56091415?s=70&v=4',
    },
    {
        supportWorkerId: 3,
        contractedHours: 15,
        name: 'Nicolas',
        avatar: '',
    },
];

const visits = [
    { visitId: 1, startDateTime: 1663405200000, endDateTime: 1663408800000, supportWorkerId: 1 },
    { visitId: 2, startDateTime: 1663405200000, endDateTime: 1663408800000, supportWorkerId: 2 },
    { visitId: 3, startDateTime: 1663405200000, endDateTime: 1663408800000, supportWorkerId: 3 },
    { visitId: 4, startDateTime: 1663405200000, endDateTime: 1663408800000, supportWorkerId: 1 },
    { visitId: 5, startDateTime: 1663405200000, endDateTime: 1663408800000, supportWorkerId: 2 },
    { visitId: 6, startDateTime: 1663405200000, endDateTime: 1663408800000, supportWorkerId: 3 },
    { visitId: 7, startDateTime: 1663405200000, endDateTime: 1663408800000, supportWorkerId: 1 },
    { visitId: 8, startDateTime: 1663405200000, endDateTime: 1663408800000, supportWorkerId: 2 },
    { visitId: 9, startDateTime: 1663405200000, endDateTime: 1663408800000, supportWorkerId: 3 },
];

const calculateWorkedHours = (workerId) => {
    const workerVisits = visits.filter(visit => visit.supportWorkerId === workerId);

    const totalMinutes = workerVisits.reduce((acc, visit) => {
        const start = new Date(visit.startDateTime);
        const end = new Date(visit.endDateTime);
        return acc + (end - start) / 60000;
    }, 0);

    return totalMinutes / 60;
};

const SupportWorkers = () => {
    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            {supportWorkers.map((worker) => {
                const workedHours = calculateWorkedHours(worker.supportWorkerId);
                const progress = (workedHours / worker.contractedHours) * 100;

                return (
                    <Grid item xs={12} sm={6} md={4} key={worker.supportWorkerId}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: { xs: 'row', sm: 'column' },
                                        justifyContent: 'center',
                                    }}>
                                    <Avatar
                                        alt={worker.name}
                                        src={worker.avatar || 'https://via.placeholder.com/70'}
                                        sx={{ width: 70, height: 70,
                                              marginRight: 2, marginBottom: { xs: 0, sm: 2 },
                                              border: '2px solid #000000',
                                              boxShadow: 4,}}
                                    />
                                    <Typography variant="h6">{worker.name}</Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={progress}
                                    sx={{ width: '100%', marginTop: 2 }}
                                    color={"secondary"}
                                />
                                <Typography variant="body2" sx={{ marginTop: 1 }}>
                                    {workedHours.toFixed(2)} / {worker.contractedHours} hours worked
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default SupportWorkers;
