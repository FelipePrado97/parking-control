package com.api.parkingcontrol.services;

import com.api.parkingcontrol.repositories.ParkingSpotRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ParkingSpotServiceTest {

    @Mock
    private ParkingSpotRepository parkingSpotRepository;

    @InjectMocks
    ParkingSpotService parkingSpotService;


    @Test
    @DisplayName("existsByLicensePlateCar retorna falso quando passamos uma placa que não existe")
    void retornaFalsoPlacaNãoExiste(){
        String licensePlateCar = "REOOY4E36";
        when(parkingSpotRepository.existsByLicensePlateCar(licensePlateCar)).thenReturn(false);
        parkingSpotService.existsByLicensePlateCar(licensePlateCar);
    }
}
